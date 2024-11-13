function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);
    const resultado = document.getElementById("resultado");
    const contenedorExtra = document.getElementById("extra-content");

    // Limpiar contenido previo
    resultado.textContent = "";
    contenedorExtra.innerHTML = "";

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        resultado.textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const imc = peso / (estatura * estatura);
    let categoria = "";

    if (imc < 18.5) {
        categoria = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidad";

        // Crear imagen
        const img = document.createElement("img");
        img.src = "obesidad.png"; // Reemplaza con la ruta a tu imagen
        img.alt = "Advertencia de Obesidad";
        img.style.width = "300px"; // Ajusta el tamaño según sea necesario
        img.classList.add("rotating"); // Añade la clase de rotación

        // Crear audio
        const audio = document.createElement("audio");
        audio.src = "audio.mp3"; // Reemplaza con la ruta a tu audio
        audio.controls = true;
        audio.autoplay = true;

        // Añadir imagen y audio al contenedor
        contenedorExtra.appendChild(img);
        contenedorExtra.appendChild(audio);
    }

    resultado.textContent = `Tu IMC es ${imc.toFixed(2)} (${categoria}).`;
}
