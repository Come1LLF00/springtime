package org.comrades.springtime.module;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@Getter
@Setter
public abstract class DotBaseEntity {


    @Column(name = "x_value")
    private Integer x;
    @Column(name = "y_value")
    private Integer y;
    @Column(name = "r_value")
    private Integer r;
    @Column(name = "is_hit")
    private boolean isHit;
}
