package com.ds.apiRest.entities;

import jakarta.persistence.*;
import org.hibernate.envers.Audited;

import java.io.Serializable;

@Entity
@Table(name = "domicilio")
@Audited
public class Domicilio implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombreCalle;
    private int numero;

    public Domicilio(Long id, String nombreCalle, int numero) {
        this.id = id;
        this.nombreCalle = nombreCalle;
        this.numero = numero;
    }

    public Domicilio() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreCalle() {
        return nombreCalle;
    }

    public void setNombreCalle(String nombreCalle) {
        this.nombreCalle = nombreCalle;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }
}
