/** 解析 上午9:42 字符 */

export class Period {
  constructor() {
    this.stamps = []
  }
  get allStamps() {
    return [...this.stamps]
  }
  addStamp(payload) {
    const info = this.parsePayload(payload)
    if (info.stamp) {
      const idx = this.stamps.findIndex((item) => item.stamp > info.stamp)
      if (idx === -1) {
        this.stamps.push(info)
      } else {
        this.stamps.splice(idx, 0, info)
      }
    }
    return info.stamp
  }
  parsePayload(payload = {}) {
    if (typeof payload === 'string') {
      raw = payload
      payload = { raw: payload }
    }
    payload = Object.assign({ am: true, pm: false }, payload)
    let raw = payload.raw
    if (raw) {
      let am = false
      if (raw.includes('上午')) {
        am = true
      } else if (raw.includes('下午')) {
        am = false
      }
      payload.am = am
      raw = raw
        .replace('上午', '')
        .replace('下午', '')
        .trim()
      let [hh, mm] = raw.split(':')
      hh = +hh
      mm = +mm
      const stamp = ((am ? 0 : 12) + hh) * 60 + mm
      Object.assign(payload, { hh, mm, stamp })
    }
    return payload
  }
}
