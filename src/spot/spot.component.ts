import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { SpotDto } from "src/shared/entities/spot-dto";
import * as html2pdf from 'html2pdf.js';

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
    this.loadMockData();
  }

  ngOnInit(): void {
    const spotId = ''+this.activeRoute.snapshot.paramMap.get('spotId');
    this.loadSelectedSpot(+spotId);
    this.url = this.domSanitizer.bypassSecurityTrustUrl(`whatsapp://send?text=Your can find your spot here: https://scan-2-find.herokuapp.com/spot/${spotId}`)
  }

  loadSelectedSpot(spotId: number) {
    const spotDto = new SpotDto();
    spotDto.id = spotId;
    spotDto.floor = -1;
    spotDto.area = 'Blue';
    spotDto.row = 2;
    spotDto.description = "Under The sea Under The sea Under The sea Under The sea Under The sea Under The sea Under Thesea Under The sea Under The sea Under The sea Under The sea Under The sea Under The sea ";
    spotDto.facilityName = "Bikini Bottom"
    this.selectedSpot = spotDto;
  }

  onShareClick() {
    const waSpotElement = document.getElementById('wa');
    waSpotElement?.click();
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

  loadMockData() {

  }
}
