import { Component } from '@angular/core';
import { WorldmapService } from '../worldmap.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  country: string = '';
  capital: string = '';
  region: string = '';
  incomeLevel: string = '';
  latitude: string = '';
  longitude: string = '';

  constructor(private worldmapService: WorldmapService) { }



  onMouseMove(event: MouseEvent) {
    const target = event.target as SVGElement
    if (target.tagName === 'path') {
      console.log('Mouse entered: ', target.id)
      this.fetchCountryDetails(target.id)
    }
  }

  onMouseLeave(event: MouseEvent) {
    const target = event.target as SVGElement
    if (target.tagName === 'path') {
      console.log('Mouse left: ', target.id)
    }
  }

  private fetchCountryDetails(isoCode: string) {
    this.worldmapService.getCountryDetails(isoCode).subscribe(data => {
      const details = data[1][0];
      console.log(details);
      this.country = details.name;
      this.capital = details.capitalCity;
      this.region = details.region.value;
      this.incomeLevel = details.incomeLevel.value;
      this.latitude = details.latitude;
      this.longitude = details.longitude;
    }
    )
  }

}
