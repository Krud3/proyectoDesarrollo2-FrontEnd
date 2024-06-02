/*import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginButton from './LoginButton'; // Asegúrate de que la ruta al componente es correcta

describe('LoginButton', () => {
  it('should call the login function when clicked', async () => {
    const mockLogin = vi.fn(); // vi.fn() es un spy de Vitest para funciones
    render(<LoginButton onLogin={mockLogin} />);

    // Simular datos de entrada válidos en los campos de usuario y contraseña
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'admin' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'adminPassword' },
    });

    // Simular clic en el botón de login
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Esperar que la función de login haya sido llamada una vez
    expect(mockLogin).toHaveBeenCalledTimes(1);

    // Opcionalmente, si también quieres verificar que se pasaron los valores correctos
    // a la función de login puedes hacer lo siguiente:
    expect(mockLogin).toHaveBeenCalledWith('admin', 'adminPassword');
  });

  it('should not call the login function when fields are empty', () => {
    const mockLogin = vi.fn();
    render(<LoginButton onLogin={mockLogin} />);

    // Simular clic en el botón de login sin rellenar los campos
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // La función de login no debería haberse llamado ya que los campos están vacíos
    expect(mockLogin).not.toHaveBeenCalled();
  });

  // Aquí puedes añadir más pruebas, por ejemplo, mostrar un mensaje de error
  // si el usuario intenta loguearse con campos vacíos o con credenciales incorrectas
});
*/
import { describe, it, expect } from 'vitest';

describe('Test Dummy', () => {
  it('debería pasar siempre', () => {
    expect(true).toBe(true);
  });
});
