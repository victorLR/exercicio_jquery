$(document).ready(function() {
    $("#lista-afazeres").submit(function(event) {
        event.preventDefault();

        const input = $("#digitar_lembrete");
        const lembrete = input.val();

        if (lembrete.trim() !== "") {
            const novoItem = $("<li>").text(lembrete);

            // Adiciona evento de clique ao novo item da lista
            novoItem.click(function() {
                $(this).toggleClass("destacado");
            });

            $("#lista-afazeres-container").append(novoItem);

            input.val("");
        }
    });
});
