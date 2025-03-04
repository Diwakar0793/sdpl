import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  homeSlides: OwlOptions = {
    animateOut: 'slideOutDown',
    animateIn: 'slideInDown',
    items: 1,
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
    autoHeight: true,
    autoplaySpeed: 800,
    mouseDrag: false,
    autoplayHoverPause: true,
    navText: [
      "<i class='flaticon-left-arrow'></i>",
      "<i class='flaticon-next-1'></i>"
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1200: {
        items: 1,
      }
    }
  }
  teamSlides: OwlOptions = {
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      }
    }
  }
  clientWrap: OwlOptions = {
    loop: true,
    margin: 30,
    nav: false,
    mouseDrag: true,
    items: 1,
    dots: false,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 800,
    autoplayHoverPause: true,
    center: false,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      }
    }
  }

  // Tabs
  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
  }

  // Video Popup
  isOpen = false;
  openPopup(): void {
    this.isOpen = true;
  }
  closePopup(): void {
    this.isOpen = false;
  }
}
