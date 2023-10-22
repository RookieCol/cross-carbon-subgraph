import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  BougthCarbonCredits,
  BougthCarbonCreditsCrosschain,
  GroceryCarbonFootprintOffset,
  OwnershipTransferred,
  RetiredCarbonCredits,
  RetiredCarbonCreditsCrosschain,
  Transfer,
  TransferCrosschain,
  TransferFromCrosschain,
  TravelCarbonFootprintOffset
} from "../generated/Carbon/Carbon"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createBougthCarbonCreditsEvent(
  buyer: Address,
  amount: BigInt
): BougthCarbonCredits {
  let bougthCarbonCreditsEvent = changetype<BougthCarbonCredits>(newMockEvent())

  bougthCarbonCreditsEvent.parameters = new Array()

  bougthCarbonCreditsEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  bougthCarbonCreditsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return bougthCarbonCreditsEvent
}

export function createBougthCarbonCreditsCrosschainEvent(
  buyer: Address,
  amount: BigInt,
  network: string
): BougthCarbonCreditsCrosschain {
  let bougthCarbonCreditsCrosschainEvent = changetype<
    BougthCarbonCreditsCrosschain
  >(newMockEvent())

  bougthCarbonCreditsCrosschainEvent.parameters = new Array()

  bougthCarbonCreditsCrosschainEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  bougthCarbonCreditsCrosschainEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  bougthCarbonCreditsCrosschainEvent.parameters.push(
    new ethereum.EventParam("network", ethereum.Value.fromString(network))
  )

  return bougthCarbonCreditsCrosschainEvent
}

export function createGroceryCarbonFootprintOffsetEvent(
  requestId: Bytes,
  moneySpentProteins: string,
  moneySpentFats: string,
  moneySpentCarbs: string,
  proteinsEmission: BigInt,
  fatsEmission: BigInt,
  carbsEmission: BigInt,
  foodEmission: BigInt,
  buyer: Address
): GroceryCarbonFootprintOffset {
  let groceryCarbonFootprintOffsetEvent = changetype<
    GroceryCarbonFootprintOffset
  >(newMockEvent())

  groceryCarbonFootprintOffsetEvent.parameters = new Array()

  groceryCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  groceryCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "moneySpentProteins",
      ethereum.Value.fromString(moneySpentProteins)
    )
  )
  groceryCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "moneySpentFats",
      ethereum.Value.fromString(moneySpentFats)
    )
  )
  groceryCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "moneySpentCarbs",
      ethereum.Value.fromString(moneySpentCarbs)
    )
  )
  groceryCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "proteinsEmission",
      ethereum.Value.fromUnsignedBigInt(proteinsEmission)
    )
  )
  groceryCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "fatsEmission",
      ethereum.Value.fromUnsignedBigInt(fatsEmission)
    )
  )
  groceryCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "carbsEmission",
      ethereum.Value.fromUnsignedBigInt(carbsEmission)
    )
  )
  groceryCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "foodEmission",
      ethereum.Value.fromUnsignedBigInt(foodEmission)
    )
  )
  groceryCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return groceryCarbonFootprintOffsetEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRetiredCarbonCreditsEvent(
  buyer: Address,
  amount: BigInt,
  certificateId: BigInt
): RetiredCarbonCredits {
  let retiredCarbonCreditsEvent = changetype<RetiredCarbonCredits>(
    newMockEvent()
  )

  retiredCarbonCreditsEvent.parameters = new Array()

  retiredCarbonCreditsEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  retiredCarbonCreditsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  retiredCarbonCreditsEvent.parameters.push(
    new ethereum.EventParam(
      "certificateId",
      ethereum.Value.fromUnsignedBigInt(certificateId)
    )
  )

  return retiredCarbonCreditsEvent
}

export function createRetiredCarbonCreditsCrosschainEvent(
  buyer: Address,
  amount: BigInt,
  network: string
): RetiredCarbonCreditsCrosschain {
  let retiredCarbonCreditsCrosschainEvent = changetype<
    RetiredCarbonCreditsCrosschain
  >(newMockEvent())

  retiredCarbonCreditsCrosschainEvent.parameters = new Array()

  retiredCarbonCreditsCrosschainEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  retiredCarbonCreditsCrosschainEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  retiredCarbonCreditsCrosschainEvent.parameters.push(
    new ethereum.EventParam("network", ethereum.Value.fromString(network))
  )

  return retiredCarbonCreditsCrosschainEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createTransferCrosschainEvent(
  from: Address,
  to: Address,
  amount: BigInt,
  network: string
): TransferCrosschain {
  let transferCrosschainEvent = changetype<TransferCrosschain>(newMockEvent())

  transferCrosschainEvent.parameters = new Array()

  transferCrosschainEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferCrosschainEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferCrosschainEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  transferCrosschainEvent.parameters.push(
    new ethereum.EventParam("network", ethereum.Value.fromString(network))
  )

  return transferCrosschainEvent
}

export function createTransferFromCrosschainEvent(
  sender: Address,
  from: Address,
  to: Address,
  amount: BigInt,
  network: string
): TransferFromCrosschain {
  let transferFromCrosschainEvent = changetype<TransferFromCrosschain>(
    newMockEvent()
  )

  transferFromCrosschainEvent.parameters = new Array()

  transferFromCrosschainEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  transferFromCrosschainEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferFromCrosschainEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferFromCrosschainEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  transferFromCrosschainEvent.parameters.push(
    new ethereum.EventParam("network", ethereum.Value.fromString(network))
  )

  return transferFromCrosschainEvent
}

export function createTravelCarbonFootprintOffsetEvent(
  requestId: Bytes,
  distance: string,
  nights: string,
  flightEmission: BigInt,
  hotelEmission: BigInt,
  travelEmission: BigInt,
  buyer: Address
): TravelCarbonFootprintOffset {
  let travelCarbonFootprintOffsetEvent = changetype<
    TravelCarbonFootprintOffset
  >(newMockEvent())

  travelCarbonFootprintOffsetEvent.parameters = new Array()

  travelCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  travelCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam("distance", ethereum.Value.fromString(distance))
  )
  travelCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam("nights", ethereum.Value.fromString(nights))
  )
  travelCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "flightEmission",
      ethereum.Value.fromUnsignedBigInt(flightEmission)
    )
  )
  travelCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "hotelEmission",
      ethereum.Value.fromUnsignedBigInt(hotelEmission)
    )
  )
  travelCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam(
      "travelEmission",
      ethereum.Value.fromUnsignedBigInt(travelEmission)
    )
  )
  travelCarbonFootprintOffsetEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return travelCarbonFootprintOffsetEvent
}
