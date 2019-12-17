/*
 *
 * Copyright 2018-present NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {Address, Deadline, Mosaic, MosaicId, NetworkType, PlainMessage, TransferTransaction, UInt64} from 'nem2-sdk';

// replace with recipient address
const rawAddress = 'TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP';
const recipientAddress = Address.createFromRawAddress(rawAddress);
// replace with network type
const networkType = NetworkType.TEST_NET;

const ignored = TransferTransaction.create(
    Deadline.create(),
    recipientAddress,
    /* start block 01 */
    [new Mosaic( new MosaicId('7CDF3B117A3C40CC'), UInt64.fromUint(1000)),
        new Mosaic ( new MosaicId('75AF035421401EF0'), UInt64.fromUint(10 * Math.pow(10, 6)))],
    /* end block 01 */
    PlainMessage.create('This is a test message'),
    networkType).setMaxFee(2);
