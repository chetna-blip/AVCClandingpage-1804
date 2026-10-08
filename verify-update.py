from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path('/home/user/avcc-challenge-checks')
OUT.mkdir(exist_ok=True)
COMMUNITY = 'https://www.skool.com/ai-video-creators'

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chrome', headless=True, args=['--no-sandbox'])
    context = browser.new_context(viewport={'width': 1440, 'height': 1000}, permissions=['clipboard-read', 'clipboard-write'])
    page = context.new_page()
    errors, rpc_calls = [], []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('request', lambda r: rpc_calls.append(r.url) if '/api/rpc/entries' in r.url else None)
    page.goto('http://localhost:4200/', wait_until='networkidle')
    page.evaluate('document.fonts.ready')
    text = page.locator('body').inner_text()
    assert 'AVCC50' in text and '50%' in text and 'AVCC30' in text and '30%' in text
    assert 'AVCC40' not in text and '40%' not in text
    assert 'First 30 users' in text and 'monthly or yearly' in text and 'Does not apply to renewals' in text
    assert '30% off all purchases' in text
    assert page.locator('h1').inner_text() == 'The Dream Client Challenge'
    assert 'Build for the client you want. Compete for $2,000 in prizes.' in text
    assert page.get_by_test_id('coupon-chip').count() == 2
    assert page.locator('#top [data-testid="coupon-chip"]').count() == 0
    assert page.locator('#results article').count() == 3
    assert page.get_by_test_id('faq-question').count() == 4
    for phrase in ['3 weeks', 'WEEK 1', 'WEEK 2', 'WEEK 3', 'use of Runable', 'execution', 'participation & distribution', 'At least 5', '@aivideoskool', '@runable_hq', 'shareable Runable chat link']:
        assert phrase in text, phrase
    assert 'PayPal' not in text and '48 hours' not in text and 'Community vote' not in text
    assert page.locator('form, #enter, [data-testid="entry-section"]').count() == 0
    assert page.locator('a[href="#enter"]').count() == 0
    for testid in ['nav-cta', 'hero-cta', 'steps-cta', 'closing-cta', 'details-cta']:
        assert page.get_by_test_id(testid).get_attribute('href') == COMMUNITY
    for a in page.get_by_role('link', name='Join the community', exact=True).all():
        assert a.get_attribute('href') == COMMUNITY
    for code in ['AVCC50', 'AVCC30']:
        page.get_by_role('button', name=f'Copy discount code {code}', exact=True).first.click()
        assert page.evaluate('navigator.clipboard.readText()') == code
    first_faq = page.get_by_test_id('faq-question').first
    assert first_faq.get_attribute('aria-expanded') == 'true'
    first_faq.click()
    assert first_faq.get_attribute('aria-expanded') == 'false'
    assert not rpc_calls, rpc_calls
    response = context.request.post('http://localhost:4200/api/rpc/entries/create', data={'json': {}})
    assert response.status == 404, (response.status, response.text())
    print('Page word count:', len(text.split()))
    for section in ['#top', '#criteria', '#qualify', '#discount', '#how-it-works', '#challenge-details']:
        page.locator(section).evaluate('(el) => window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 70)')
        page.wait_for_timeout(1100)
        page.screenshot(path=str(OUT / (section[1:] + '-skool-desktop.png')))
    page.set_viewport_size({'width': 390, 'height': 844})
    page.reload(wait_until='networkidle')
    page.evaluate('document.fonts.ready')
    assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth')
    page.get_by_role('button', name='Open menu').click()
    assert page.get_by_role('link', name='Join challenge', exact=True).last.get_attribute('href') == COMMUNITY
    page.get_by_role('button', name='Close menu').click()
    page.locator('#how-it-works').evaluate('(el) => window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 70)')
    page.wait_for_timeout(1100)
    page.screenshot(path=str(OUT / 'weeks-skool-mobile.png'))
    assert not errors, errors
    print('PASS: both discount offers and clipboard codes, Skool CTAs, no form or entry requests, retired endpoint 404, FAQ, mobile layout/menu, no browser errors')
    browser.close()