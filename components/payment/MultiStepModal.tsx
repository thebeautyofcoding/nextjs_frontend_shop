import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import React, { useState } from "react"
import {
  CreateCheckoutSessionMutation,
  CreateCheckoutSessionMutationVariables,
} from "../../graphql/types"
import { useAppSelector } from "../../hooks/hooks"
import { openModal } from "../../redux/paymentModalSlice"
import { createCheckoutSession } from "./../../graphql/createCheckoutSession"
import { useAppDispatch } from "./../../hooks/hooks"
import Summary from "./Summary"
import Address from "./Address"
import LastStep from "./LastStep"
import { Button, Modal, Stack } from "react-bootstrap"

export default function MultiStepModal() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const steps = ["Summary", "Address", "LastStep"]

  const isLastStep = step === steps.length - 1

  const isOpen = useAppSelector((state) => state.payment.openMultiStepModal)
  const dispatch = useAppDispatch()
  const itemsForStripe = useAppSelector((state) =>
    state.cart.productsInCart.map((product) => ({
      id: product.id,
      quantity: product.quantity,
    }))
  )

  const [createSession, { data, loading, error }] = useMutation<
    CreateCheckoutSessionMutation,
    CreateCheckoutSessionMutationVariables
  >(createCheckoutSession, {
    onCompleted: (data) => {
      router.push(data.createCheckoutSession.url)
      dispatch(openModal(false))
    },
  })

  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return <Summary />
      case 1:
        return <Address />
      case 2:
        return <LastStep />

      default:
        return <Summary />
    }
  }

  const handleClose = () => dispatch(openModal(false))
  const handleNext = async () => {
    if (isLastStep) {
      await createSession({
        variables: {
          items: itemsForStripe,
        },
      })
    }
    {
      setStep(step + 1)
    }
  }
  const handlePrev = () => {
    if (step > 0) setStep(step - 1)
  }

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{steps[step]}</h3>
        {renderStep(step)}

        <Stack direction="horizontal" gap={2}>
          <Button onClick={handlePrev}>Prev</Button>
          {!isLastStep ? (
            <Button onClick={handleNext} variant="secondary">
              Next
            </Button>
          ) : (
            <Button onClick={handleNext} variant="success">
              {!loading ? "Payment Process" : "Processing"}
            </Button>
          )}
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
