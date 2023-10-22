import {
  BougthCarbonCredits as BougthCarbonCreditsEvent,
  BougthCarbonCreditsCrosschain as BougthCarbonCreditsCrosschainEvent,
  GroceryCarbonFootprintOffset as GroceryCarbonFootprintOffsetEvent,
  RetiredCarbonCredits as RetiredCarbonCreditsEvent,
  RetiredCarbonCreditsCrosschain as RetiredCarbonCreditsCrosschainEvent,
  Transfer as TransferEvent,
  TransferCrosschain as TransferCrosschainEvent,
  TransferFromCrosschain as TransferFromCrosschainEvent,
  TravelCarbonFootprintOffset as TravelCarbonFootprintOffsetEvent,
} from "../generated/Carbon/Carbon";
import {
  BougthCarbonCredits,
  BougthCarbonCreditsCrosschain,
  GroceryCarbonFootprintOffset,
  RetiredCarbonCredits,
  RetiredCarbonCreditsCrosschain,
  Transfer,
  TransferCrosschain,
  TransferFromCrosschain,
  TravelCarbonFootprintOffset,
} from "../generated/schema";

export function handleBougthCarbonCredits(
  event: BougthCarbonCreditsEvent
): void {
  let entity = new BougthCarbonCredits(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.buyer = event.params.buyer;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleBougthCarbonCreditsCrosschain(
  event: BougthCarbonCreditsCrosschainEvent
): void {
  let entity = new BougthCarbonCreditsCrosschain(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.buyer = event.params.buyer;
  entity.amount = event.params.amount;
  entity.network = event.params.network;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleGroceryCarbonFootprintOffset(
  event: GroceryCarbonFootprintOffsetEvent
): void {
  let entity = new GroceryCarbonFootprintOffset(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.requestId = event.params.requestId;
  entity.moneySpentProteins = event.params.moneySpentProteins;
  entity.moneySpentFats = event.params.moneySpentFats;
  entity.moneySpentCarbs = event.params.moneySpentCarbs;
  entity.proteinsEmission = event.params.proteinsEmission;
  entity.fatsEmission = event.params.fatsEmission;
  entity.carbsEmission = event.params.carbsEmission;
  entity.foodEmission = event.params.foodEmission;
  entity.buyer = event.params.buyer;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRetiredCarbonCredits(
  event: RetiredCarbonCreditsEvent
): void {
  let entity = new RetiredCarbonCredits(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.buyer = event.params.buyer;
  entity.amount = event.params.amount;
  entity.certificateId = event.params.certificateId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRetiredCarbonCreditsCrosschain(
  event: RetiredCarbonCreditsCrosschainEvent
): void {
  let entity = new RetiredCarbonCreditsCrosschain(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.buyer = event.params.buyer;
  entity.amount = event.params.amount;
  entity.network = event.params.network;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransferCrosschain(event: TransferCrosschainEvent): void {
  let entity = new TransferCrosschain(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.amount = event.params.amount;
  entity.network = event.params.network;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransferFromCrosschain(
  event: TransferFromCrosschainEvent
): void {
  let entity = new TransferFromCrosschain(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sender = event.params.sender;
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.amount = event.params.amount;
  entity.network = event.params.network;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTravelCarbonFootprintOffset(
  event: TravelCarbonFootprintOffsetEvent
): void {
  let entity = new TravelCarbonFootprintOffset(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.requestId = event.params.requestId;
  entity.distance = event.params.distance;
  entity.nights = event.params.nights;
  entity.flightEmission = event.params.flightEmission;
  entity.hotelEmission = event.params.hotelEmission;
  entity.travelEmission = event.params.travelEmission;
  entity.buyer = event.params.buyer;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
