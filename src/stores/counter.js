import { defineStore } from 'pinia'

export default function Store(){
  return defineStore('elements', {
    state: () =>({
      pagesToggle: false,
      servicesToggle: false,
      showMobileNav: false,
    })
  })()
}
