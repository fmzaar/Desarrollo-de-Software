package com.ds.apiRest.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.envers.Audited;

import java.io.Serializable;

@Entity
@Table(name = "categoria")
@Audited
@Data
public class Categoria  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String denominacion;

    public Categoria(Long id, String denominacion) {
        this.id = id;
        this.denominacion = denominacion;
    }

    public Categoria() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDenominacion() {
        return denominacion;
    }

    public void setDenominacion(String denominacion) {
        this.denominacion = denominacion;
    }
}
