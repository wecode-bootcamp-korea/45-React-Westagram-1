//위스타 배너
function Nav() {
  return (
    <nav className="navigation">
      <div class="insta">
        <i class="fa-brands fa-instagram fa-xl" />
        <span>Westagram</span>
      </div>
      <div class="search">
        <input class="searching" type="text" placeholder="검색" />
        <i class="fa-solid fa-magnifying-glass fa-xs" />
      </div>
      <div class="icons">
        <i class="fa-regular fa-compass fa-xl" />
        <i class="fa-regular fa-heart fa-xl" />
        <i class="fa-regular fa-user fa-xl" />
      </div>
    </nav>
  );
}

export default Nav;
