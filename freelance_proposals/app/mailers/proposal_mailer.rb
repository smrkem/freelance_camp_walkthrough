class ProposalMailer < ApplicationMailer
  def proposal_email(proposal)
    @proposal = proposal
    mail(to: @proposal.client_email, subject: "You've received a new proposal")
  end
end
