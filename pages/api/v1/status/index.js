function status(request, response) {
  response.status(200).json({ chave: "são bão" });
}

export default status;
