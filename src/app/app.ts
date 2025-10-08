import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('matuang_pisamban');

  appVersion = version;
}
