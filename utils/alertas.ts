import { showMessage } from "react-native-flash-message";

export const mostrarError = (titulo: string, descripcion: string) => {
  showMessage({
    message: titulo,
    description: descripcion,
    type: "danger",
    backgroundColor: "#ef4444", 
    style: { 
      borderRadius: 16, 
      marginTop: 10, 
      marginHorizontal: 15 
    },
    titleStyle: { 
      fontSize: 18, 
      fontWeight: 'bold', 
      marginBottom: 4 
    },
    textStyle: { 
      fontSize: 14 
    }
  });
};

export const mostrarExito = (titulo: string, descripcion: string) => {
  showMessage({
    message: titulo,
    description: descripcion,
    type: "success",
    backgroundColor: "#22c55e", 
    style: { borderRadius: 16, marginTop: 10, marginHorizontal: 15 },
    titleStyle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
    textStyle: { fontSize: 14 }
  });
};