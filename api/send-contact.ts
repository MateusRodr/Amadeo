import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY

if (!apiKey) {
  throw new Error('RESEND_API_KEY não configurada')
}

const resend = new Resend(apiKey)

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed'
    })
  }

  const { name, email, phone, message } = req.body ?? {}

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      message: 'Preencha todos os campos'
    })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Amadeo <onboarding@resend.dev>',

      // Temporário para testes.
      // Depois trocar pelos e-mails oficiais da Amadeo.
      to: ['mr5508113@gmail.com'],

      replyTo: email,

      subject:
        'Nova solicitação de contato pelo site – Amadeo Serviços Agroflorestais',

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            color: #333333;
            line-height: 1.6;
          "
        >
          <p>
            Olá, uma nova solicitação de contato foi enviada através do site da
            Amadeo Serviços Agroflorestais.
          </p>

          <h3>Dados do visitante</h3>

          <p>
            <strong>Nome:</strong> ${name}
          </p>

          <p>
            <strong>E-mail:</strong> ${email}
          </p>

          <p>
            <strong>Telefone:</strong> ${phone}
          </p>

          <p>
            <strong>Mensagem:</strong>
          </p>

          <p>${message}</p>

          <hr />

          <p>
            O visitante está aguardando um retorno. Entrem em contato através
            do telefone ou e-mail informado acima.
          </p>
        </div>
      `
    })

    if (error) {
      console.error('[Resend API Error]:', error)

      return res.status(500).json({
        message: 'Erro ao enviar e-mail'
      })
    }

    return res.status(200).json({
      message: 'Mensagem enviada com sucesso',
      data
    })
  } catch (error) {
    console.error('[Send Contact Error]:', error)

    return res.status(500).json({
      message: 'Erro ao enviar e-mail'
    })
  }
}