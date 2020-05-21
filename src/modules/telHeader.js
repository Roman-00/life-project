'use strict';

const telHeader = () => {
  const headerContactsArrow = document.querySelector('.header-contacts__arrow'),
    telMenuArrow = headerContactsArrow.querySelector('img'),
    headerContacts = document.querySelector('.header-contacts__phone-number-accord'),
    headerContactsLink = headerContacts.querySelector('a'),
    head = document.querySelector('head');

    const telMenuActive =document.createElement('style');
      telMenuActive.textContent = `
        .activeTel {
          position: static;
          opacity: 1 !important;
        }
        .rotateTel {
          transform: rotate(180deg);
        }`;
    
    head.append(telMenuActive);

    headerContactsArrow.addEventListener('click', event => {
      if(!event.target.classList.contains('img')) {
        telMenuArrow.classList.toggle('rotateTel');
        headerContacts.classList.toggle('activeTel');
        headerContactsLink.classList.toggle('activeTel');
      }
    });
};

export default telHeader;