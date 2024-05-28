export class FormValidator {
  private forms: NodeListOf<HTMLFormElement>;

  constructor(formSelector: string) {
    this.forms = document.querySelectorAll(formSelector) as NodeListOf<HTMLFormElement>;
    this.initializeValidation();
  }

  private initializeValidation(): void {
    Array.from(this.forms).forEach((form) => {
      const errorElement = document.createElement('div');
      errorElement.classList.add('error-messages');
      form.appendChild(errorElement);

      form.addEventListener(
        'submit',
        (event: Event) => {
          const messages: string[] = [];

          const nameInput = form.querySelector('#name') as HTMLInputElement;
          const telInput = form.querySelector('#tel') as HTMLInputElement;
          const messageInput = form.querySelector('#message') as HTMLTextAreaElement;

          if (nameInput && nameInput.value.trim() === '') {
            messages.push('Wprowadź imię');
          }

          if (telInput && (telInput.value.trim().length < 9 || isNaN(Number(telInput.value)))) {
            messages.push('Numer telefonu musi zawierać co najmniej 9 cyfr');
          }

          if (messageInput && messageInput.value.trim().length < 15) {
            messages.push('Wiadomość musi zawierać co najmniej 15 znaków');
          }

          if (messages.length > 0) {
            event.preventDefault();
            errorElement.innerText = messages.join('.\n');
          } else {
            errorElement.innerText = '';
            form.classList.add('was-validated');
          }
        },
        false
      );
    });
  }
}
