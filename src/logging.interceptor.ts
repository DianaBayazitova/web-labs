import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      // .pipe(tap(data => console.log(data)));
      .pipe(map(() => ({time: Date.now() - now})));
    // .pipe(tap(() => console.log(`Af/ter... ${Date.now() - now}ms`)));
  }
}