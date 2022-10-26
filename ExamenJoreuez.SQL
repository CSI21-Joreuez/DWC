
-- SCHEMA: dlk_operacional_productos
-- DROP SCHEMA IF EXISTS dlk_operacional_productos ;
CREATE SCHEMA IF NOT EXISTS dlk_operacional_productos
    AUTHORIZATION postgres;
-- SEQUENCE: dlk_operacional_productos.opr_cat_productos_id_producto_seq

-- DROP SEQUENCE IF EXISTS dlk_operacional_productos.opr_cat_productos_id_producto_seq;

CREATE SEQUENCE IF NOT EXISTS dlk_operacional_productos.opr_cat_productos_id_producto_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY opr_cat_productos.id_producto;

ALTER SEQUENCE dlk_operacional_productos.opr_cat_productos_id_producto_seq
    OWNER TO postgres;

-- Table: dlk_operacional_productos.opr_cat_productos

-- DROP TABLE IF EXISTS dlk_operacional_productos.opr_cat_productos;

CREATE TABLE IF NOT EXISTS dlk_operacional_productos.opr_cat_productos
(
    md_uuid character varying COLLATE pg_catalog."default" NOT NULL,
    md_fch date,
    id_producto integer NOT NULL DEFAULT nextval('dlk_operacional_productos.opr_cat_productos_id_producto_seq'::regclass),
    cod_producto character varying COLLATE pg_catalog."default" NOT NULL,
    nombre_producto character varying COLLATE pg_catalog."default",
    tipo_producto_origen character varying COLLATE pg_catalog."default",
    tipo_producto_clase character varying COLLATE pg_catalog."default",
    des_producto character varying COLLATE pg_catalog."default",
    fch_alta_producto timestamp without time zone,
    fch_baja_producto timestamp without time zone,
    CONSTRAINT opr_cat_productos_pkey PRIMARY KEY (id_producto)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS dlk_operacional_productos.opr_cat_productos
    OWNER to postgres;