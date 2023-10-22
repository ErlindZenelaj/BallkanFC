import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-broadage-widget',
  templateUrl: './boradage-widget-container.component.html',
  styleUrls: ['./boradage-widget-container.component.css']
})
export class WidgetComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // Create the Broadage widget script element
    const script = this.renderer.createElement('script');
    script.src = "//cdn-saas.broadage.com/widgets/loader/loader.js";
    script.async = true;

    // Set the attributes for the script
    script.setAttribute('data-bundleId', 'soccer-tglb');
    script.setAttribute('data-accountId', '8259f6af-a524-4ce2-8449-c8773476a33d');
    
    // Append the script to the document
    this.renderer.appendChild(document.body, script);
  }
}
