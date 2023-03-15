import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import * as html2pdf from 'html2pdf.js';
import { SpotDto } from "src/shared/entities/spot-dto";
import { findSpotById } from "src/shared/mock/spots";

@Component({
  selector: 's2f-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SpotComponent implements OnInit {

  selectedSpot: SpotDto;
  url: SafeUrl;

  constructor(private activeRoute: ActivatedRoute, private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    const spotId = ''+this.activeRoute.snapshot.paramMap.get('spotId');
    this.loadSelectedSpot(+spotId);
    this.url = this.domSanitizer.bypassSecurityTrustUrl(`whatsapp://send?text=Your can find your spot here: https://scan-2-find.herokuapp.com/spot/${spotId}`)
  }

  loadSelectedSpot(spotId: number) {
    const spotDto: SpotDto = findSpotById(spotId);
    this.selectedSpot = spotDto;
  }

  onDownloadClick() {
    const pdfOptions = {
      margin: 0,
      filename: 'Sacn2Find.pdf',
      image: { type: 'pdf', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: [91, 170] }
    };

    const spotElement = document.getElementById('s2f-spot');
    html2pdf().from(spotElement).set(pdfOptions).save();
  }
}
