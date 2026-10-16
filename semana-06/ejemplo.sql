SELECT p.id_post, p.titulo, p.fecha, p.id_usuario, u.nombr, COUNT(c.id_post) 
FROM posteos p
INNER JOIN u usuarios ON u.id_usuario = p.id_usuario
INNER JOIN c comentarios ON c.id_post = p.id_post
INNER JOIN r reacciones ON r.id_post = p.id_post
GROUP BY 

INSERT INTO usuarios(nombre, email, clave)
VALUES( )
