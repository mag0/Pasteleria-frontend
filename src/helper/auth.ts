export const isAdmin = () => {
    return localStorage.getItem("isAdmin") === "true";
};

export const loginAdmin = (password: string) => {

    const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

    if (password === ADMIN_PASSWORD) {
        localStorage.setItem("isAdmin", "true");
        return true;
    }

    return false;
};

export const logoutAdmin = () => {
    localStorage.removeItem("isAdmin");
};