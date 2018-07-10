import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[eventColor]',
})

export class EventColorDirective implements OnInit {
    @Input('eventColor') color: string;
    constructor(public el: ElementRef, public renderer: Renderer2) {
    }

    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color ? this.color : 'black');
    }
}