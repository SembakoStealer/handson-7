import { CanActivate, ExecutionContext, Req } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const isAuthenticated = request.headers.authorization ? true : false;
    return isAuthenticated;
  }
}
