import {
    RouteReuseStrategy,
    ActivatedRouteSnapshot,
    DetachedRouteHandle,
    RouterModule,
    Routes,
    UrlSegment
} from '@angular/router';

export class RouteReuseService implements RouteReuseStrategy {
    private handlers: { [key: string]: DetachedRouteHandle } = {};

    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return false;
        }
        let shouldReuse: boolean;
        if (route.routeConfig.data) {
            route.routeConfig.data.reuse ? shouldReuse = true : shouldReuse = false;
        }
        return shouldReuse;
    }
    public store(route: ActivatedRouteSnapshot, handler: DetachedRouteHandle): void {
        if (handler) {
            this.handlers[this.getUrl(route)] = handler;
        }
    }
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!this.handlers[this.getUrl(route)];
    }
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return null;
        }
        return this.handlers[this.getUrl(route)];
    }
    public shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
        let reUseUrl: boolean;
        if (future.routeConfig) {
            if (future.routeConfig.data) {
                reUseUrl = future.routeConfig.data.reuse;
            }
        }
        const defaultReuse: boolean = (future.routeConfig === current.routeConfig);
        return reUseUrl || defaultReuse;
    }
    public getUrl(route: ActivatedRouteSnapshot): string {
        if (route.routeConfig) {
            const url: string = route.routeConfig.path;
            return url;
        }
    }
}
