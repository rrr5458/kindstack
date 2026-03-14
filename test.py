from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1600, "height": 900})
    page.goto("http://localhost:3000/contact")
    page.wait_for_timeout(1000)
    page.screenshot(path="wide_screenshot_new_padding.png")
    browser.close()
