'use client'

import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useRouter, usePathname } from 'next/navigation';
const useAuth = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState(false); // Initialize with false

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');

    if (!jwtToken) {
      // Token is missing, user is not authenticated
      setAuthenticated(false);
      router.push('/login');
    } else {
      try {
        const decodedToken = jwt_decode<{ exp: number }>(jwtToken);
        const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds

        if (expirationTime <= Date.now()) {
          // Token is expired, remove it from local storage and user is not authenticated
          localStorage.removeItem('jwtToken');
          setAuthenticated(false);
          router.push('/login');
        } else {
          // User is logged in, check if they are trying to visit /login
          if (pathname === '/login') {
            router.push('/dashboard'); // Redirect to /dashboard if already logged in and trying to visit /login
          }
          setAuthenticated(true); // User is authenticated
        }
      } catch (error) {
        // Token is invalid or couldn't be decoded, remove it from local storage and user is not authenticated
        localStorage.removeItem('jwtToken');
        setAuthenticated(false);
        router.push('/login');
      }
    }
  }, [router]);

  return authenticated; // Return the authenticated status
};

export default useAuth;
// const useAuth = () => {
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const jwtToken = localStorage.getItem('jwtToken');

//     if (!jwtToken) {
//       // Token is missing, redirect to the login page
//       router.push('/login');
//     } else {
//       try {
//         const decodedToken = jwt_decode<{ exp: number }>(jwtToken);
//         const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds

//         if (expirationTime <= Date.now()) {
//           // Token is expired, remove it from local storage and redirect to the login page
//           localStorage.removeItem('jwtToken');
//           router.push('/login');
//         } else {
//           // User is logged in, check if they are trying to visit /login
//           if (pathname === '/login') {
//             router.push('/dashboard'); // Redirect to /dashboard if already logged in and trying to visit /login
//           }
//         }
//       } catch (error) {
//         // Token is invalid or couldn't be decoded, remove it from local storage and redirect to the login page
//         localStorage.removeItem('jwtToken');
//         router.push('/login');
//       }
//     }
//   }, [router]);

//   return;
// };

// export default useAuth;
