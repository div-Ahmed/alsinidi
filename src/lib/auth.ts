// utils/auth.ts
import { jwtDecode } from 'jwt-decode';

export const setToken = (token: string) => {
    document.cookie = `userToken=${token}; path=/; max-age=3600`;
};

export const getToken =  () => {
    const match = document.cookie.match(/(^| )userToken=([^;]+)/);
    return match ? match[2] : null;
};

export const isTokenValid = async(token: string) => {
    if (!token) return false;
    const decoded: any = await jwtDecode(token);
    const now = Date.now() / 1000; // current time in seconds
    return decoded.exp > now;
};

export const isAuthenticated = () => {
    const token = getToken();
    return token && isTokenValid(token);
};

export const logout = () => {
    document.cookie = 'userToken=; Max-Age=0; path=/;';
    window.location.href = '/sign-in';
};

export const refreshToken = async () => {
    const response = await fetch('/api/refresh-token', { method: 'POST', credentials: 'include' });
    if (response.ok) {
        const { token } = await response.json();
        setToken(token);
        return token;
    } else {
        throw new Error('Failed to refresh token');
    }
};
