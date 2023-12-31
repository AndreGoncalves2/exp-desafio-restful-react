import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [ data, setData] = useState({});


    async function signIn({ email, password}) {

        try {
            const response = await api.post("/session", { email, password });

            const { user, token } = response.data;

            api.defaults.headers.authorization = `Bearer ${token}`;

            window.localStorage.setItem("@movienotes:user", JSON.stringify(user));
            window.localStorage.setItem("@movienotes:token", token);

            setData({ user, token });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível fazer o login");
            };
        };
    };

    function signOut() {
        localStorage.removeItem("@movienotes:user");
        localStorage.removeItem("@movienotes:token");

        setData({});
    };

    async function updateProfile({ user, avatarFile }) {
        try {
            if (avatarFile) {
                const fileUploadForm = new FormData();

                fileUploadForm.append("avatar", avatarFile);
                const response = await api.patch("/users/avatar", fileUploadForm);

                user.avatar = response.data.avatar;
            };
            
            await api.put("/users", user);
            window.localStorage.setItem("@movienotes:user", JSON.stringify(user));
            
            alert("Alterações aplicadas!");
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert(error);
            };
        };
    };
    
    useEffect(() => {
        const user = window.localStorage.getItem("@movienotes:user");
        const token = window.localStorage.getItem("@movienotes:token");

        api.defaults.headers.authorization = `Bearer ${token}`;

        if (user && token) {
            setData({
                user: JSON.parse(user),
                token
            });
        };
    }, [])
    return (
        <AuthContext.Provider value={{ 
                signIn,
                signOut,
                user:data.user,
                updateProfile
            }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    return context;
};

export { AuthProvider, useAuth };