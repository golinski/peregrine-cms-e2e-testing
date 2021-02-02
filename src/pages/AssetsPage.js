const BaseNodePage = require('./bases/BaseNodePage')
const {I} = inject()

class AssetsPage extends BaseNodePage {

  constructor() {
    super()
  }

  getUrl(tenant) {
    return `/content/admin/pages/assets.html/path:/content/${tenant}/assets`
  }

  deleteAsset(title) {
    this.explorer.deleteNode('asset', title)
  }
}

module.exports = new AssetsPage()
module.exports.AssetsPage = AssetsPage