// USO DE TRY & CATCH & FINALLY

try { // TRATA DE HACER
    console.loggg("Imprimiendo un mensaje")
} catch(error) { // SI FALLA TRY, ENTRA EL CATCH
    console.error("Ocurrio un error al procesar", error)
} finally { // SIEMPRE SE EJECUTA
    console.log("Esto es un finally");
}
