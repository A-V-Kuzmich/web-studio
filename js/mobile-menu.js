(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");
    const mobileBtnScrol = document.querySelector("[modal-2]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
      mobileBtnScrol. classList.toggle("no-scrol");
    });
  
    mobileBtnClose.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
      mobileBtnScrol. classList.toggle("no-scrol");
    });
  })();