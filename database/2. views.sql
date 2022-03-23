USE REACTIVACION;

-- =============================================================================================================
-- TABLA USUARIOS
-- =============================================================================================================
CREATE VIEW vs_usuarios_datos_personal
AS
SELECT 	USU.idusuario, PRS.apellidos, 
		PRS.nombres, USU.descripcion, 
		USU.horarioatencion, USU.nivelusuario, 
		USU.rol, USU.email
	FROM usuarios USU
	INNER JOIN personas PRS ON PRS.idpersona = USU.idpersona;

SELECT * FROM vs_usuarios_datos_personal;
-- ------------------------------------------------------------------------------------------------------------
-- OBTENERR ESTABLECIMIENTOS
CREATE VIEW vs_usuarios_datos_establecimiento
AS
SELECT 	USU.idusuario, PRS.apellidos, 
		PRS.nombres,  EMP.establecimiento, 
		EMP.ruc, EMP.ubicacion, EMP.referencia,
		EMP.latitud, EMP.longitud, 
		USU.horarioatencion		
	FROM usuarios USU
	INNER JOIN personas PRS ON PRS.idpersona = USU.idpersona
	LEFT JOIN empresas EMP ON EMP.idempresa = USU.idempresa;
	
	
-- OBTENERR REDES SOCIALES