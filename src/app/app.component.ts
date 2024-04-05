import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.initializeApp();
  }

  async initializeApp() {
    const idioma = await Device.getLanguageCode();
    console.log(idioma);
    this.translate.setDefaultLang('en');
    this.translate.use(idioma.value);
  }
}
