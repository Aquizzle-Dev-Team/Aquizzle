export function resetInputs(): void {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++)
        inputs[i].value = '';
}
