import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisplayFilm]'
})
export class DisplayFilmDirective  implements OnInit{

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }
}
