import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MenuFlotanteProps {
    enInicio: boolean;
    alPresionarProductos: () => void;
    alPresionarLogout: () => void;
    alPresionarInicio?: () => void;
}

export function MenuFlotante({
    enInicio,
    alPresionarProductos,
    alPresionarLogout,
    alPresionarInicio
}: MenuFlotanteProps) {
    return (
        <View className="absolute bottom-10 left-4 right-4 bg-white border border-slate-100 flex-row justify-around items-center h-16 rounded-full shadow-xl px-4">

            <TouchableOpacity onPress={alPresionarInicio} className="p-3">
                <Ionicons
                    name={enInicio ? "home" : "home-outline"}
                    size={24}
                    color={enInicio ? "#0f172a" : "#94a3b8"}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={alPresionarProductos} className="p-3">
                <Ionicons
                    name={enInicio ? "grid-outline" : "grid"}
                    size={24}
                    color={enInicio ? "#94a3b8" : "#0f172a"}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={alPresionarLogout} className="p-3">
                <Ionicons name="log-out-outline" size={26} color="#ef4444" />
            </TouchableOpacity>
        </View>
    );
}