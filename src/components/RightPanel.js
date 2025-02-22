const {I} = inject()

class RightPanel {

  constructor() {
    this.locator = {
      container(){
        return locate('.explorer-preview')
      },
      nav() {
        return this.container()
            .find('.explorer-preview-nav')
            .find('.nav-left')
      },
      body() {
        return this.container()
            .find('.vue-form-generator')
      },
      footer() {
        return this.container()
            .find('.explorer-confirm-dialog')
      },
      infoTabBtn() {
        return this.nav()
            .find('a').at(1)
            .as('info-tab-btn')
      },
      editBtn() {
        return this.footer()
            .find('.btn.right[title^="edit "][title$=" properties"]')
            .as('edit-btn')
      },
      saveBtn() {
        return this.footer()
            .find('.btn.right[title^="save "][title$=" properties"]')
            .as('save-btn')
      },
      referencesTabBtn() {
        return this.nav()
            .find('a').withAttr({title: 'references'})
            .as('references-tab-btn')
      },
      reference(position) {
        return this.container()
            .find('.explorer-page-referenced-by')
            .find('.collection-item').at(position)
            .as(`reference no. ${position}`)
      }
    }
  }

  openReferencesTab() {
    I.waitForElement(this.locator.referencesTabBtn(), 10)
    I.click(this.locator.referencesTabBtn())
  }

  clickReference(position) {
    I.click(this.locator.reference(position))
  }

  openInfoTab() {
    I.waitForElement(this.locator.infoTabBtn(), 10)
    I.click(this.locator.infoTabBtn())
  }

  clickEditBtn() {
    I.waitForElement(this.locator.editBtn(), 10)
    I.click(this.locator.editBtn())
  }

  clickSaveBtn() {
    I.waitForElement(this.locator.saveBtn(), 10)
    I.click(this.locator.saveBtn())
  }
}

module.exports = new RightPanel()
module.exports.RightPanel= RightPanel