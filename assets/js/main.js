function naviClickFn(id, headerHeight) {
  const _target = document.getElementById(id);
  const _offsetTop = _target.offsetTop - headerHeight;
  $("body, html").stop().animate(
    {
      scrollTop: _offsetTop,
    },
    500
  );
}
