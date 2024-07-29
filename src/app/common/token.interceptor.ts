import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

// export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // const token = getToken();
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MSIsImlhdCI6MTcyMjI0ODU2NywiZXhwIjoxNzIyNjgwNTY3fQ.42RdEdJzlM_ZkP5snaPV_miZBzH3vUjlVaylEYxffK0";
  console.log(sessionStorage.getItem("token"));
  const router = inject(Router);

  if (token) {
    var cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(cloned).pipe(
      catchError((error: any) => {
        // if (error instanceof HttpErrorResponse && error.status === 401) {
        if (error.status === 401) {
          const errorMessage = "Unauthorized. Please log in to continue.";
          if (errorMessage) {
            Swal.fire({
              title: "Warning",
              text: "Session Expired. Please log in to continue",
              icon: "warning",
              showCancelButton: false,
              confirmButtonText: "OK",
              timer: 6000, // Optional: auto-close after 30 seconds
              timerProgressBar: true,
            }).then((result) => {
              if (
                result.isConfirmed ||
                result.dismiss === Swal.DismissReason.timer
              ) {
                localStorage.clear();
                sessionStorage.clear();
                localStorage.removeItem("token");
                sessionStorage.removeItem("token");
                //location for 404 page on session expire with componenet
                // window.location.href = '/login';

                router.navigate(["/login"]);
              }
            });
          }
        }

        return throwError(error);
      })
    );
  }
  return next(req);
};

function getToken(): string | null {
  return sessionStorage.getItem("token");
}
