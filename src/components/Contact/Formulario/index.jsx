import React, { useState } from "react";
import "./index.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <div className="formulario__container">
        <Formik
          initialValues={{
            nombre: "",
            correo: "",
          }}
          validate={(valores) => {
            let errores = {};

            if (!valores.nombre) {
              errores.nombre = "Please enter a name.";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
              errores.nombre = "The name can only contain letters and spaces.";
            }

            if (!valores.correo) {
              errores.correo = "Please enter an e-mail address.";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.correo
              )
            ) {
              errores.correo =
                "E-mail can only contain letters, numbers, periods, hyphens and underscores.";
            }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            console.log("Formulario enviado");
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
          }}
        >
          {({ errors }) => (
            <Form className="formulario">
              <div>
                <label htmlFor="nombre"></label>
                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="nombre"
                  component={() => <div className="error">{errors.nombre}</div>}
                />
              </div>
              <div>
                <label htmlFor="correo"></label>
                <Field
                  type="text"
                  id="correo"
                  name="correo"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="correo"
                  component={() => <div className="error">{errors.correo}</div>}
                />
              </div>
              <div>
                <Field name="mensaje" as="textarea" placeholder="Message" />
              </div>

              <button type="submit">Send message!</button>
              {formularioEnviado && (
                <p className="exito">Message sent successfully!</p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default Formulario;
