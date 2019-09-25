
      h: hm,
      x: r.x,
      y: r.y
    }
  }

  Mag.prototype.constrainLensXY = function (r) {
    return {
      x: this.minMax(r.x, 0, 1 - r.w),
      y: this.minMax(r.y, 0, 1 - r.h),
      w: r.w,
      h: r.h
    }
  }

  Mag.prototype.constrainLens = function (r) {
    var c = this.constrainLensXY(this.constrainLensWH(r))
    if (((c.w + c.x) > 1)) {
      c.x = Math.max(0, 1 - c.w)
    }
    if (((c.h + c.y) > 1)) {
      c.y = Math.max(0, 1 - c.h)
    }
    return c
  }

  Mag.prototype.project = function (frame) {
    var model = this.model
    var lens = model.lens
    return {
      x: lens.x * frame.w,
      y: lens.y * frame.h,
      w: lens.w * frame.w,
      h: lens.h * frame.h
    }
  }

  if (MagnificentAnalytics) {
    MagnificentAnalytics.track('mag.js')
  }

  return Mag
}))