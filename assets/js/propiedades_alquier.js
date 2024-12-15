import {propiedadesEnAlquiler} from "./data/propiedades.js"
console.log(propiedadesEnAlquiler)

const propiedadesParaMostrar = (propiedades, contenedoresId) => {
    const container = document.getElementById(contenedoresId)
    container.className = 'row'

    for (const propiedad of propiedades) {
        const tarjeta = document.createElement ('div')
        tarjeta.className = 'col-md-4 mb-4'
        const contenidoTarjeta = `
            <div class="card h-100 rounded border-2 text-center">
                <img src="${propiedad.src}" class="card-img-top img-fluid rounded-end-0 mx-auto h-50 mb-3" alt="${propiedad.src}"/>
                <h3 class='px-2'>${propiedad.nombre}</h3>
                <p class='px-2'>${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt px-1"></i>${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed px-1"></i>${propiedad.habitaciones}Habitaciones | <i class="fas fa-bath px-1"></i>${propiedad.baños} Baños</p>
                <p><i class="fas fa-dollar-sign px-1"></i>${propiedad.costo} UF</p>
                <p><i class="${propiedad.smoke ? 'fas fa-smoking px-1' : 'fas fa-smoking-ban px-1'}"></i> ${propiedad.smoke ? "Se permite fumar" : "No se permite fumar"}</p>
                <p><i class="${propiedad.pets ? 'fas fa-paw px-1' : 'fas fa-ban px-1'}"></i> ${propiedad.pets ? "Se permiten mascotas" : "No se permiten mascotas"}</p>
            </div>
            `

            tarjeta.innerHTML = contenidoTarjeta
            container.appendChild(tarjeta)
    }
}

propiedadesParaMostrar(propiedadesEnAlquiler, 'alquilerContainer')