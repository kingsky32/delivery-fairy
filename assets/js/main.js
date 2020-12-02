function naviClickFn(id) {
  const _target = document.getElementById(id);
  const _offsetTop = _target.offsetTop - 62;
  $("body, html").stop().animate(
    {
      scrollTop: _offsetTop,
    },
    500
  );
}
