import { setDefaultTimeout, Before, After } from '@cucumber/cucumber'
import { chromium } from 'playwright'

setDefaultTimeout(60000)

Before(async function () {
  this.browser = await chromium.connectOverCDP('http://localhost:9222')
  const contexts = this.browser.contexts()

  this.context = contexts.length
    ? contexts[0]
    : await this.browser.newContext({
        viewport: { width: 1366, height: 768 }
      })

  this.page = await this.context.newPage()
})

After(async function () {
  await this.page?.close()
  await this.context?.close()
  await this.browser?.close?.()
})
